interface Envs {
  PATH_ROOT_URL: string;
  PROJECT_CATEGORY: string;
}

export const envs: Envs = {
  PATH_ROOT_URL: import.meta.env.PATH_ROOT_URL,
  PROJECT_CATEGORY: import.meta.env.PROJECT_CATEGORY,
};
