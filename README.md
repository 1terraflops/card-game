# card-game
Multiplayer browser game

## 💡 About card-game
Memetics is a turn-based multiplayer browser card game where 2 players play againt one another with a random cool deck full of memes!

The goal of this game is to make your opponent loose all their health with a random deck of cards! Each card has unique stats, some cards have special abilities. Play smart, manage your mana and time to win in as few turns as possible!

In memetics you can:
* Create an account/log in
* Login as a guest
* Restore your password
* Add a profile picture
* Join a lobby (via a public lobby or ID)
* Exchange messages during a game
* Enjoy fun cards
* And more!

## 🔧 Built with
* **JavaScript**
* **HTML**
* **CSS**
* **Node.js**
* **Express**
* **MySQL**
* **Socket.io**
* **JWT**

## ✍️Authors
The project was developed in 2 weeks by a team of 3 people:

* 1terraflops (me) - backend
* [Butterfly2112](https://github.com/Butterfly2112) - frontend
* [DianaMalashta](https://github.com/DianaMalashta) - assets

## 🚀 Getting started
These instructions will help you configure and run this project to run it on your machine.

### 🧩 Prerequisites
Before trying to run the project, make sure you have Node.js and MySQL installed and configured on your system:

Use your preferred package manager in order to install dependencies. Here's an example for Homebrew on macOS:
```
brew install node mysql
```

### ⚙️ Installation
After cloning the repository, navigate to card-game root directory and run 'npm install' command:
```
npm install
```

Before running the application, open `config.json` file and if needed, edit the content to suit your mysql database configuration.

**Optionally:** add a Mailjet sender, API Key and Secret Key into a .env file in order to make it possible to restore an account with an email. Alternatively, open utils.js and modify sendEmail function, by providing any other host with required parameters.

The application should now be ready to run.

## ✅ Usage

First, start the server:
```
node app.js
```

or

```
npm run dev
```

Then proceed to 'http://localhost:3000/'

Open the second tab in a private view, or in a different browser (for a correct cookie storage).

**Preview:**

<img width="1329" alt="image" src="https://github.com/user-attachments/assets/ddab1977-6141-418d-9746-027b01f804ec" />
