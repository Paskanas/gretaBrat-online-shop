export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
  role: number;
}

export type EmailFormProps = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
  auth: {
    user: User;
  };
};

export interface AchievementProps {
  id: number;
  achievement: string;
} 

export interface Art {
  id: number;
  title: string;
  description: string;
  photo_path: string;
  hover_photo_path: string;
  price: number;
}

export interface PortfolioImage {
  id: number;
  title: string;
  order: number;
  photo_path: string;
  extension?: string;
}

export interface ArtSizes { 
    size: string[];
    shipping: number[];
}

export interface ShopPageProps extends PageProps {
  arts: Art[];
}

export interface ShopItemPageProps extends PageProps {
  art: Art;
  sizes: ArtSizes;
}

export interface CartItem {
  art_id: number;
  size: string[];
}

export interface OptionsProps {
  art: Art;
  sizes: ArtSizes;
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;

}

export interface Item {
  id: number;
  title: string;
  year: number;
  genre: string;
  duration_in_minutes: number;
  imdb: number;
  type: string;
  img_url: string;
}

export interface FunctionData {
  id: number;
  title?:string;
  setButtonEnabled?: React.Dispatch<React.SetStateAction<boolean>>;
}



export interface CardContainerProps extends PageProps {
  items: Item[];
  showFavorites: boolean;
  updateItems: React.Dispatch<React.SetStateAction<Item[]>>;
  showButtons: boolean;
}

export interface CardProps extends PageProps {
  item: Item;
  showFavorites: boolean;
  favoriteItemsIds: number[];
  setFavoriteItemsIds: React.Dispatch<React.SetStateAction<number[]>>;
  handleRemoveFromFavoriteItems: (data: FunctionData) => void;
  showButtons: boolean;
  editPage: boolean;
}


export interface CardButtonProps {
  item: Item;
  handleButtonClick: (data:FunctionData) =>void;
  buttonId: number;
}

export interface CardItems {

}