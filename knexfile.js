"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
module.exports = {
<<<<<<< HEAD
    client: 'sqlite3',
    connection: {
        filename: path_1.default.resolve(__dirname, 'src', 'database', 'database.sqlite')
    },
    migrations: {
        directory: path_1.default.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path_1.default.resolve(__dirname, 'src', 'database', 'seeds')
=======
    development: {
        client: 'sqlite3',
        connection: {
            filename: path_1.default.resolve(__dirname, 'src', 'database', 'database.sqlite')
        },
        migrations: {
            directory: path_1.default.resolve(__dirname, 'src', 'database', 'migrations')
        },
        seeds: {
            directory: path_1.default.resolve(__dirname, 'src', 'database', 'seeds')
        }
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: path_1.default.resolve(__dirname, 'src', 'database', 'migrations')
        },
>>>>>>> d97917b0154fe5bbede89af38e1384c86caabf68
    }
};
