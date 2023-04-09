use regex::Regex;

pub struct Rgb
{
  pub red: u8,
  pub green: u8,
  pub blue: u8
}

pub fn hex_to_rgb(hex: &str) -> Rgb
{
  let validation = Regex::new("^#(([0-9a-fA-F]{2}){3}|([0-9a-fA-F]){3})$").unwrap().is_match(hex);

  if !validation
  {
    panic!("Not valid hexadecimal");
  }

	let mut hexadecimal_color = hex.strip_prefix('#').unwrap().to_string();

  if hexadecimal_color.len() == 3
  {
    hexadecimal_color = format!("{}{}", &hexadecimal_color[0..3], &hexadecimal_color[0..3]);
  }

	let red = u8::from_str_radix(&hexadecimal_color[0..2], 16).unwrap_or(0);
	let green = u8::from_str_radix(&hexadecimal_color[2..4], 16).unwrap_or(0);
	let blue = u8::from_str_radix(&hexadecimal_color[4..6], 16).unwrap_or(0);

	return Rgb { red, green, blue };
}
