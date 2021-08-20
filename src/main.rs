use std::io;
use std::path::Path;
use std::path::PathBuf;

use rocket::Response;
use rocket::fs::NamedFile;
#[macro_use] extern crate rocket;
use rocket::fs::relative;
use rocket::http::Header;
use rocket::http::hyper::header;
use rocket::response::Redirect;
use rocket::response::Responder;
use rocket::tokio::fs::File;


pub struct CachedFile(NamedFile);

impl CachedFile {
    pub async fn open<P: AsRef<Path>>(path: P) -> io::Result<CachedFile> {
        let nfile = NamedFile::open(path).await?;
        Ok(CachedFile(nfile))
    }
}

impl<'r> Responder<'r, 'static> for CachedFile {
    fn respond_to(self, request: &'r rocket::Request<'_>) -> rocket::response::Result<'static> {
        let mut response = self.0.respond_to(request)?;
        response.set_raw_header("Cache-Control", "max-age=2592000");
        rocket::response::Result::Ok(response)
    }
}

#[get("/")]
async fn index() -> CachedFile {
    CachedFile::open("./static/html/index.html").await.unwrap()
}

#[get("/static/html/index.html")]
fn redirect_to_home() -> Redirect {
    Redirect::to("/")
}

#[get("/static/<path..>")]
async fn static_file(path: PathBuf) -> Option<CachedFile> {
    let mut file_path = PathBuf::new();
    file_path.push("./static/");
    file_path.push(path);
    CachedFile::open(file_path).await.ok()
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![index, redirect_to_home, static_file])
}