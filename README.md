# Spoiled Potatoes React/ Ruby on Rails

## Description

This project is a mock Rotten Tomatoes web application that allows the user to rate and review a movie. 

## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm
- Postgresql

See Environment Setup below for instructions on installing these tools if you
don't already have them.

## Setup

Start by **cloning** (not forking) the project template repository and removing
the remote:

```console
$ git clone https://github.com/JWehder/phase-4-project.git
$ cd phase-4-project
```

You can use the following commands to run the application:

- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)


## Environment Setup

### Install the Latest Ruby Version

Verify which version of Ruby you're running by entering this in the terminal:

```console
$ ruby -v
```

I recommend version 2.7.4. If you need to upgrade you can install it using rvm:

```console
$ rvm install 2.7.4 --default
```

You should also install the latest versions of `bundler` and `rails`:

```console
$ gem install bundler
$ gem install rails
```

I also use styled-components to add personal styling to my react components from the same file. You can install it by running the below code. There's also more information about this library in the resources section below.

```console
$ npm install styled-components
```

### Install NodeJS

Verify you are running a recent version of Node with:

```sh
node -v
```

If your Node version is not 16.x.x, install it and set it as the current and
default version with:

```sh
nvm install 16
nvm use 16
nvm alias default 16
```

You can also update your npm version with:

```sh
npm i -g npm
```

### Install Postgresql

#### PostgreSQL Installation for WSL

To install Postgres for WSL, run the following commands from your Ubuntu terminal:

```sh
sudo apt update
sudo apt install postgresql postgresql-contrib libpq-dev
```

Then confirm that Postgres was installed successfully:

```sh
psql --version
```

Run this command to start the Postgres service:

```sh
sudo service postgresql start
```

Finally, you'll also need to create a database user so that you are able to
connect to the database from Rails. First, check what your operating system
username is:

```sh
whoami
```

If your username is "ian", for example, you'd need to create a Postgres user
with that same name. To do so, run this command to open the Postgres CLI:

```sh
sudo -u postgres -i
```

From the Postgres CLI, run this command (replacing "ian" with your username):

```sh
createuser -sr ian
```

Then enter `control + d` or type `logout` to exit.

[This guide][postgresql wsl] has more info on setting up Postgres on WSL if you
get stuck.

[postgresql wsl]: https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-database#install-postgresql

#### Postgresql Installation for OSX

To install Postgres for OSX, you can use Homebrew:

```sh
brew install postgresql
```

Once Postgres has been installed, run this command to start the Postgres
service:

```sh
brew services start postgresql
```

## Troubleshooting

If you ran into any errors along the way, here are some things you can try to
troubleshoot:

- If you're on a Mac and got a server connection error when you tried to run
  `rails db:create`, one option for solving this problem for Mac users is to
  install the Postgres app. To do this, first uninstall `postgresql` by running
  `brew remove postgresql`. Next, download the app from the
  [Postgres downloads page][] and install it. Launch the app and click
  "Initialize" to create a new server. You should now be able to run
  `rails db:create`.

- If you're using WSL and got the following error running `rails db:create`:

  ```txt
  PG::ConnectionBad: FATAL:  role "yourusername" does not exist
  ```

  The issue is that you did not create a role in Postgres for the default user
  account. Check [this video](https://www.youtube.com/watch?v=bQC5izDzOgE) for
  one possible fix.

[postgres downloads page]: https://postgresapp.com/downloads.html

## Implementing an SMTP Server to send emails

Travel to the config directory, then the environments, and within both the development and production files you will need to enter in your login credentials for an email service that allows you to utilize your account as an SMTP server. I have provided the proper layout for entering your information within the aforementioned files. 

If you would like to use mine, send me an email at jake.wehder@gmail.com and I can provide you with my credentials.

Zoho mail is the email service that I used. 

[Zoho Mail SMTP Setup Page]: (https://www.zoho.com/mail/help/zoho-smtp.html)

## Usage

In order to see a working form of my application as well as how to use it, I created a [YouTube Video!]()

## Contributing and Support

For any major changes or questions, please feel free to reach out to me directly via email at jake.wehder@gmail.com.

Reach out to me on [LinkedIn!](https://www.linkedin.com/in/jake-wehder/) 

## Resources

- [styled components](https://styled-components.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Rails Guides Mailers](https://guides.rubyonrails.org/action_mailer_basics.html)

## License 

[MIT](https://choosealicense.com/licenses/mit/)
