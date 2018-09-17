<<<<<<< HEAD
=======
# Desktop Develop
This branch is for development builds, used for debugging and testing purposes.

>>>>>>> develop
# LittleWeeb

LittleWeeb is a IRC XDCC Client Purely made for downloading anime. It features a simple design made to function and nothing more. It's free, it will always be free, and will never contain Ads or anything that makes you think about giving us money. Since this whole project is voluntary, meant to be voluntary, meant to be non-profit, we, as developers of LittleWeeb, will never start asking for donations of the sorts.


# Showcase/Usage

[YouTube - v0.4.0](https://youtu.be/LgnheGjRz7Y)
[YouTube - v0.2.0](https://youtu.be/GbBz1ReDahU)
[YouTube - pre v0.1.0 version](https://www.youtube.com/watch?v=yJjL9wQEEEQ)


# New (Functional) Features! V0.4.0 is OUT!
- Fully functional (advanced) search feature.
- A Favorite feature!
- Download Progress and play functionality on the Anime Page itself.
- Easy Download button (just select your resolution & go, where resolution defaults to 720p). 
- A download manager where downloads are ordered per Anime! (And each anime get's it's own directory!).
- And ofcourse: Cross-Platform!!!

**More technical release note**
- Fully rewrittten the back-end to make it better maintainable. 
- Switched from .net framework to .net core (cross-platform).
- Custom in-house [websocket server](https://github.com/EldinZenderink/SimpleWebSocketServer). 
- Rewritten in-house [Irc Client](https://github.com/EldinZenderink/SimpleIRCLib).
- Implemented [anime-relations](https://github.com/erengy/anime-relations) for better episode segregation.
- Implemented [LittleWeebRules](https://github.com/littleweeb/LittleWeebRules) for better episode parsing. 
- Switched from anilist to Kitsu API.
- Improved currently airing parsing (shows latest **available** episodes/anime).
- Fixes most of the issues presented here [Issues](https://github.com/EldinZenderink/LittleWeeb/issues).


### Tech
LittleWeeb uses a number of open source projects to work properly:

**Desktop Clients:**
* [Electron](https://electronjs.org/)

**Android:**
* [Xamarin.Android + WebView](https://docs.microsoft.com/en-us/xamarin/android/)

**Interface:**
* [Semantic UI](https://semantic-ui.com/)- A slick looking CSS Framework.
* [jQuery] - unfortunately, semantic ui has a very limited angular implementation which didn't suit the needs for this application.
* [NIBL API](https://api.nibl.co.uk:8080/swagger-ui.html) - Thanks to nibl.co.uk API and the developer [Jenga201](https://github.com/jenga201) from NIBL to provide me the api and help that I need!
* [Kitsu API](https://kitsu.docs.apiary.io/) - To replace anilists api.

**Backend:**
* Custom in-house [SimpleWebSocketServer](https://github.com/EldinZenderink/SimpleWebSocketServer) - I could use an excisting one... . 
* Custom in-house [SimpleIRCLib](https://github.com/EldinZenderink/SimpleIRCLib) - Why are there no other DCC supported IRC Client libraries out there?.
* [Json.NET](https://www.newtonsoft.com/json) - Well... obviously.

### Installation Desktop Clients

[**Download here.**](https://littleweeb.github.io)

1. Download the installer or launcher for your platform.
2. Click on it... 
3. Have fun!

* (Do note, the initial directory for downloading on Windows and Mac OS X is set to the users Documents directory, this location is also where the Settings, Log and Download History json files are stored.)
* On linux, the default download directory and directory for storing the configuration & log files is the same as where the AppImage is launched, make sure to **not** launch LittleWeeb from a directory which requires root permission!


### Installation Android

[**Download here.**](https://littleweeb.github.io)

1. Download the APK file.
2. Allow unknown sources (if asked). (If not asked: Settings -> Security)
3. Open the APK and install.
4. PROFIT.

* (Do note, SD Card support is not yet functional and tested, so make sure that you have enough space left for some anime files on your **internal** storage.)

### Installation Server

[**Download here.**](https://littleweeb.github.io)

**Pre-require:**
1. Install dotnet runtime (here)[https://www.microsoft.com/net/download] for your specific platform.
2. Download the zip file containing the server for your platform.
3. Extract the zip file.

**Windows**:
1. Run the executable called LittleWeebServer.exe

**Linux**:
1. Either open a terminal in the extracted directory our double click on the executable.
2. (Terminal: ./LittleWeebServer)

**Mac**:
1. Either open a terminal in the extracted directory our double click on the executable.
2. (Terminal: ./LittleWeebServer)


* Do note, the interface is only meant for local usage as of now, you can download anime and the likes, but opening the files directly from the interface is not possible yet!.

### Development

This application is still in development, contains many issues, which I haven't found yet. Since I am doing the grunt of the development, and the front-end is handled by Daniel-Law, the progress is slow. Furthermore, we are doing it in our free-time and mine is just about to run out. Therefor I cannot work on major releases and will only be fixing issues with the current version. App breaking bugs and issues will be solved first and minor issues will be solved lateron. 

### What can you do?

This application is made with love, for them weebs. But with just the two of us working on LittleWeeb, we can't do that much in the short time limited that we call free time. Therefor, I would humbly ask any LittleWeeb users to help us and eachother out when using LittleWeeb. So.. therefor, in case that you feel like you want to help, please notify us of any issue that you encouter with LittleWeeb using the following guides:

For Linux : https://youtu.be/jvfNACbsw88
For MacOS : https://youtu.be/hxcVy56M1Po
For Windows: https://youtu.be/oouWz7MGReE
For Android: https://youtu.be/3ze2Ab6-adY

You can report an issue for desktop versions here: https://github.com/LittleWeeb/Desktop/issues
You can report an issue for android versions here: https://github.com/LittleWeeb/Android/issues

Or you can report an issue (in case it's not really important or in case you just want to have a chat) here: https://discord.gg/t84VSMd

If you want to help development in general, just join the discord, where you can talk with us!


### Todos

 - Make the interface server ready.
 - Rewrite interface (v0.5.0). 
 - Magic tricks.

License
----

MIT

**Free Software, Hell Yeah!**

<<<<<<< HEAD
=======

>>>>>>> develop
