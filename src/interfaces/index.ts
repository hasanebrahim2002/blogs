interface Category {
  name: string;
  color: string;
  bgColor: string;
}
export interface Section {
  image: string;
  title: string;
  head: string;
  description: string;
}
export interface Blog {
  id: number;
  image: string;
  history: string;
  title: string;
  description: string;
  longDescription: string;
  titleSection: string;
  category: Array<Category>;
  sections: Array<Section>;
}
export interface BlogsProps {
  posts: Array<Blog>;
  currentPage: number;
  blogsPerPage: number;
}

export interface BlogProps {
  blog: Blog;
  variant: "vertical" | "horizontal" | "wide";
}

export interface Link {
  content: string;
  path: string;
}
export interface NavProps {
  logo: string;
  links: Array<Link>;
}

export interface BlogsPerPage {
  blogsPerPage: number;
}
