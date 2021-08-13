use std::path::PathBuf;

use rocket::fs::NamedFile;
#[macro_use] extern crate rocket;
use rocket::fs::relative;
use rocket::response::Redirect;

#[get("/")]
async fn index() -> NamedFile {
    NamedFile::open("./static/html/index.html").await.unwrap()
}

#[get("/static/html/index.html")]
fn redirect_to_home() -> Redirect {
    Redirect::to("/")
}

#[get("/static/<path..>")]
async fn static_file(path: PathBuf) -> Option<NamedFile> {
    let mut file_path = PathBuf::new();
    file_path.push("./static/");
    file_path.push(path);
    NamedFile::open(file_path).await.ok()
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![index, redirect_to_home, static_file])
}