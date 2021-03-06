export {};

declare global {
  interface ObjectType {
    [key: string]: any;
  }

  interface APIData {
    responseCode: string;
    message: string;
    data: ObjectType;
    currentIndex?: number;
    currentPage?: number;
    totalPage?: number;
  }
}
