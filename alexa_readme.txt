Prerequisites for running Alexa on Raspberry Pi:

- Raspberry Pi
  - Pi 3 is recommended, however a Pi 2 is also compatible with an internet connection
  - The Raspberry Pi must have Raspbian installed.
- Power cable for Raspberry Pi
- A MicroSD card
- A USB microphone
- Speakers that have an auxiliary port
- A keyboard and mouse for the Raspberry Pi for setup

Steps to create and use Alexa on Raspberry Pi:

1: Create a Amazon Developer Account
  - To create a developer account, visit developer.amazon.com and then create an account.
  - Navigate to the Alexa tab and select Register. Select Device for the product type.
  - Name the device anything you choose. Then click next.
  - In the Security Profile section, click "Create a new profile". Under the General tab, name your profile and click next.
  - Make a note of the Product ID, Client ID, and Client Secret that the website generates for you.
  - Navigate to the Web settings tab and click the edit button to edit the settings.
  - Click "Add Another" next to Allowed origins and add "https://localhost:3000"
  - Click "Add Another" next to Allowed return URLs and add "https://localhost:3000/authresponse". Then click next.
  - Next, fill out the Device Details tab, it doesn't matter what you put, as long as the required fields are satisfied. Then click next.
  - Finally, select "No" for Amazon Music as it is not compatible with the Raspberry Pi.
2: Clone and Install Alexa
  - Open terminal on the Raspberry Pi and type "cd Desktop".
  - Type "git clone https://github.com/alexa/alexa-avs-sample-app.git" and click enter.
  - Type "cd ~/Desktop/alexa-avs-sample-app" and click enter.
  - Type "nano automated_install.sh" and click enter. This will open the text editor. You will need to enter your ProductID, ClientID, and ClientServer as seen in the Amazon Developer Site.
  - Then enter CTRL+X to save and exit.
  - Now back to the command terminal, type in "cd ~/Desktop/alexa-avs-sample-app" and press enter.
  - Type ". automated_install.sh" and click enter.
  - When prompted, press Y for the various questions, and answer the questions as you see fit. This will install the supplemental software which is necessary for Alexa to run.
3: Run the Alexa Web Service
  - Type in "cd ~/Desktop/alexa-avs-sample-app/samples" and press enter.
  - Type in "cd companionService && npm start" and press enter.
  - Doing this will start the Alexa Companion Service and opens a port on your computer to communicate with Amazon. Leave the terminal window open.
4: Run the Sample app and confirm the account
  - Now either create a new tab, or open a new terminal window.
  - Type in "cd ~/Desktop/alexa-avs-sample-app/samples" and press enter.
  - Type in "cd javaclient && mvn exec:exec" and press enter.
  - Now a new window will open to ask to authenticate your device. Click yes. A second pop-up will appear in the Java app, which will ask you to click OK. Do not click this yet.
  - The browser will open to a page where you login to your amazon developer account. Then click okay and the site will say "device tokens ready".
  - You can now click ok in the popup on the Java app.
5: Start your Wake up word engine
  - Open a new tab or terminal window and type "cd ~/Desktop/alexa-avs-sample-app/samples" and press enter.
  - Type "cd wakeWordAgent/src && ./wakeWordAgent -e kitt_ai" and press enter.
  - This will start the wake up work recognition. Now you can say the wake up word, "Alexa", and should hear a beep of awknowledgement through the speaker. Now the Echo is fully functioning and you can ask it anything you'd like.
6: Add Airplay Support
  - Open a new tab, or terminal window.
  - Type "sudo apt-get install git libao-dev libssl-dev libcrypt-openssl-rsa-perl libio-socket-inet6-perl libwww-perl avahi-utils libmodule-build-perl" and click enter.
  - The above command will install the prerequisite software needed for the airplay protocol.
  - Press Y when prompted and then wait for the installation to complete.
  - Type "git clone https://github.com/njh/perl-net-sdp.git" and press enter.
  - Type "cd perl-net-sdp" and press enter.
  - Type "perl Build.PL" and press enter.
  - Type "sudo ./Build" and press enter.
  - Type "sudo ./Build test" and press enter.
  - Type "cd .." and press enter.
  - Type "git clone https://github.com/hendrikw82/shairport.git" and press enter.
  - Type "cd shairport" and press enter.
  - Type "make" and press enter.
  - Type "./shairport.pl -a AlexaPi" and press enter. This will start the AirPlay service for the Pi and you can stream music to it.
