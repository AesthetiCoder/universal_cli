

mod global;
mod modules;

use crate::modules::print::input::list;

fn main()
{
  list("Que deseas hacer ?", vec!["New project", "New feature"]);
}
