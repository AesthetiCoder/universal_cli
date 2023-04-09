pub enum Base {
  Black,
  White
}

impl Base
{
  fn ansi_num(self) -> String
  {
    match self
    {
      Base::Black => String::from("#000000"),
      Base::White => String::from("#FFFFFF")
    }
  }
}
