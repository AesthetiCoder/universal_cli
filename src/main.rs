mod modules;
use std::time::{ SystemTime, UNIX_EPOCH, Duration };

#[cfg(windows)]
extern crate windows;

const A: &str = r#"
                   _
                   -`
                  .o+`
                 `ooo/
                `+oooo:
               `+oooooo:
               -+oooooo+:
             `/:-:++oooo+:
            `/++++/+++++++:
           `/++++++++++++++:
          `/+++ooooooooooooo/`
         ./ooosssso++osssssso+`
        .oossssso-````/ossssss+`
       -osssssso.      :ssssssso.
      :osssssss/        osssso+++.
     /ossssssss/        +ssssooo/-
   `/ossssso+/:-        -:/+osssso+-
  `+sso+:-`                 `.-/+oso:
 `++:.                           `-/+/
 .`                                 `"#;

#[cfg(target_os = "windows")]
fn get() -> Result<Duration, String>
{
  let ret: u64 = unsafe { windows::Win32::System::SystemInformation::GetTickCount64() };
  Ok(Duration::from_millis(ret))
}


fn time () -> String
{
  let start = SystemTime::now().duration_since(UNIX_EPOCH).expect("error").as_secs();
  return second_to_time(start);
}

fn second_to_time (total_seconds: u64) -> String
{
  let hours = (total_seconds % (3600*24)) / 3600;
  let minutes = (total_seconds % 3600) / 60;
  let seconds = total_seconds % 60;

  return format!("{:02}:{:02}:{:02}", hours, minutes, seconds);
}

fn main()
{
  match get()
  {
    Ok(uptime) =>
    {
      println!("{}", second_to_time(uptime.as_secs()));
    }
    Err(err) => {
        eprintln!("uptime: {}", err);
        std::process::exit(1);
    }
}

}
