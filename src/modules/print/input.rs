use std::io::{ self, Write };

pub fn input(text: &str) -> String
{
  let mut value = String::new();
  print!("{}", text);
  io::stdout().flush();
  io::stdin().read_line(&mut value);
  return value;
}

pub fn list(text: &str, choices: Vec<&str>) -> String
{
  let mut value = String::new();

  println!("{}", text);

  for el in choices
  {
    println!("{}", el);
  }
  io::stdin().read_line(&mut value);


  return value;
}