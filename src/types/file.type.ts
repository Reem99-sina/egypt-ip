export enum UploadFilesVariants {
  INPUT = "INPUT",
  DRAG_AND_DROP = "DRAG_AND_DROP",
}
export interface AuctionMedia {
  id: number;
  link: string;
  type: "file" | "photo" | "video";
  deleted: boolean;
  auction_id: number;
  createdAt: string;
  updatedAt: string;
  name?: string;
}
