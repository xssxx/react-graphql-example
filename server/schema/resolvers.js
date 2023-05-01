import { UserList, MovieList } from "../fakeData.js";
import _ from "lodash";

const resolvers = {
  Query: {
    // users resolvers
    users() {
      return UserList;
    },
    user(parent, args) {
      const id = args.id;
      const user = _.find(UserList, { id: Number(id) });
      return user;
    },
    // movies resolvers
    movies() {
      return MovieList;
    },
    movie(parent, args) {
      const name = args.name;
      const movie = _.find(MovieList, { name });
      return movie;
    },
  },

  User: {
    favoriteMovies() {
      return _.filter(MovieList, (movie) => movie.yearOfPublication >= 2010);
    },
  },

  Mutation: {
    createUser(parent, args) {
      const user = args.input;
      let lastId = UserList[UserList.length - 1].id;
      user.id = lastId + 1;
      UserList.push(user);
      return user;
    },
    updateUsername(parent, args) {
      const { id, newUsername } = args.input;
      let userUpdated;
      UserList.forEach((user) => {
        if (user.id === Number(id)) {
          user.username = newUsername;
          userUpdated = user;
        }
      });
      return userUpdated;
    },
  },
};

export default resolvers;
