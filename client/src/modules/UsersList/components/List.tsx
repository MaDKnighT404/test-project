import { FixedSizeList } from "react-window";

import User from "./User";

import { LIST_HEIGHT, ITEM_SIZE, LIST_WIDTH } from "../constants";
import type { User as UserType } from "../types";

const List = ({ filteredUsers }: { filteredUsers: UserType[] }) => {
  return (
    <div className="list">
      <FixedSizeList
        height={LIST_HEIGHT}
        itemSize={ITEM_SIZE}
        width={LIST_WIDTH}
        itemCount={filteredUsers.length}
      >
        {({ index, style }) => {
          const item = filteredUsers[index];
          return (
            <div style={style}>
              <User user={item} />
            </div>
          );
        }}
      </FixedSizeList>
    </div>
  );
};

export default List;
