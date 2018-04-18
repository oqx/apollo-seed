### Getting Started

1.  Ask Jay for the DB_URI environmental variable, then from the project's root enter the following command:

```sh
touch .env
```

Place the variables in the `.env` file.

2.  To run, install docker on your server/local machine, then initialize with the following command while in root:
    `docker-compose up --build`

Since the database is running inside of a barebones container, SSH isn't available. Though it is possible to access DB documents via [Robo T3](https://robomongo.org/download)

Once installed, connect to it through the host path and the following port: `27018`

3.  Cleanup - If you create additional Docker volumes, add them to the remove command in `cleanup.sh`. This can be executed with `sh cleanup.sh` on a Mac.
