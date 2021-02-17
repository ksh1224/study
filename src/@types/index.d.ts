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

  type RootStackParamList = {
    Home: undefined;
    Auction: undefined;
    Chat: undefined;
    CommunityDetail: undefined;
    Write: undefined;
  };

  type HomeStackParamList = {
    Main: undefined;
    Community: undefined;
    DealList: undefined;
    UserInfo: undefined;
  };

  // type RootState = ReturnType<typeof rootReducer>;

  // type Actions = ActionType<typeof actions>;
}
