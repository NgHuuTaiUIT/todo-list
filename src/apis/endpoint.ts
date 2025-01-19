const VERSION_PREFIX = '';

export const endpoints = {
  auth: {
    login: `${VERSION_PREFIX}/authenticate`,
    register: `${VERSION_PREFIX}/register`,
  },
  todos: {
    get: `${VERSION_PREFIX}/todos`,
    update: `${VERSION_PREFIX}/todos`,
    delete: `${VERSION_PREFIX}/todos`,
    create: `${VERSION_PREFIX}/todos/add`,
  },
};
