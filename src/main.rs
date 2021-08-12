use std::path::PathBuf;

use rocket::fs::NamedFile;
#[macro_use] extern crate rocket;
use rocket::fs::relative;

#[get("/")]
async fn index() -> NamedFile {
    NamedFile::open("./static/html/index.html").await.unwrap()
}

#[get("/static/<path..>")]
async fn static_file(path: PathBuf) -> Option<NamedFile>{
    let mut file_path = PathBuf::new();
    file_path.push("./static/");
    file_path.push(path);
    println!("{:?}", file_path);
    NamedFile::open(file_path).await.ok()
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![index, static_file])
}