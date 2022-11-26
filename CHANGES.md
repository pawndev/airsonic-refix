# Warning

This is just a fork from github.com/tamland/airsonic-refix where I want to play with the code for my own use.
This is not a project that I tend to maintain in the long term.

## Changes from the original repo

- Ability to configure the instance name on the panel: https://github.com/pawndev/airsonic-refix/pull/1
- Correctly clear all the queue, except the one you are currently playing (if it's in pause, it'll be deleted too): https://github.com/pawndev/airsonic-refix/pull/2
- Add an option to repeat the current track: https://github.com/pawndev/airsonic-refix/pull/3
- Add a button to download an entire album (do not work with subsonic, only navidrome was tested): https://github.com/pawndev/airsonic-refix/pull/4
- Navidrome does not support radio/podcast, the Not Implemented error code is catch in the fron to avoir a uselesss error panel: https://github.com/pawndev/airsonic-refix/pull/5
- In the album tracklist view, add empty raw with the current disc number (if any): https://github.com/pawndev/airsonic-refix/pull/6
- Add keyboard shortcut: https://github.com/pawndev/airsonic-refix/pull/7
    * m -> toggle mute
    * r -> toggle repeat
    * s -> toggle shuffle
    * / -> focus search
    * space -> play/pause
    * ctrl+right -> next
    * ctrl+left  -> previous
    * ctrl+up    -> increase volume
    * ctrl+down  -> decrease volume
- Ability to disable the radio and podcast with an environment variable: https://github.com/pawndev/airsonic-refix/pull/8
