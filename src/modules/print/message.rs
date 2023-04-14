enum FontStyle
{
  Bold,
  Dim,
  Italic,
  Underlined,
  Blink,
  BlinkFast,
  Reverse,
  Hidden,
  StrikeThrough,
}

struct Message
{
  text: String
}

impl Message
{
  fn new(text: &str) -> Message
  {
    Message
    {
      text: format!("{}{}", text, "\x1b[0m")
    }
  }

  fn font(mut self, font_style: FontStyle) -> Message
  {
    let font_style = match font_style {
      FontStyle::Bold => String::from("\x1b[1m"),
      FontStyle::Dim => String::from("\x1b[2m"),
      FontStyle::Italic => String::from("\x1b[3m"),
      FontStyle::Underlined => String::from("\x1b[4m"),
      FontStyle::Blink => String::from("\x1b[5m"),
      FontStyle::BlinkFast => String::from("\x1b[6m"),
      FontStyle::Reverse => String::from("\x1b[7m"),
      FontStyle::Hidden => String::from("\x1b[8m"),
      FontStyle::StrikeThrough => String::from("\x1b[9m"),
    };

    self.text =  format!("{}{}", font_style, self.text);
    return self;
  }

  fn color(mut self, foreground: &str) -> Message
  {
    let color_rgb = hex_to_rgb(foreground);
    self.text = format!("{}{}{}{}{}{}{}{}", "\x1B[38;2;", color_rgb.red, ";", color_rgb.green, ";", color_rgb.blue, "m", self.text);
    return self;
  }

  fn bg(mut self, foreground: &str) -> Message
  {
    let color_rgb = hex_to_rgb(foreground);
    self.text = format!("{}{}{}{}{}{}{}{}", "\x1B[48;2;", color_rgb.red, ";", color_rgb.green, ";", color_rgb.blue, "m", self.text);
    return self;
  }
}

fn message(text: &str) -> Message
{
  Message::new(text)
}