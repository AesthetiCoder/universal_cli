
mod modules;

const SPACE: &str = r#"


   "#;

const A: &str = r#"   _
  /_\
 / _ \
/_/ \_\"#;

fn font(text: &str)
{
  let text_vector: Vec<char> = text.to_lowercase().chars().collect();
  let mut result: Vec<&str>= vec![];

  for text_char in text_vector
  {
    match text_char {
      'a' => result.push(A),
      _ => result.push(SPACE)
    }
  }

  println!("{}", result.join(""));
}

fn main()
{
  font("AAA AAA");
}
