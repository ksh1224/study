export {};

declare global {
  interface ObjectType {
    [key: string]: any;
  }

  type APIData = {
    responseCode: string;
    message: string;
    data: ObjectType;
    currentIndex?: number;
    currentPage?: number;
    totalPage?: number;
  };
}
