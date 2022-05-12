import { useState, KeyboardEvent } from "react";
import { Button, Input } from "..";
import cn from "classnames";
import styles from "./Search.module.css";
import SearchIcon from "./search.svg";
import { SearchProps } from "./Search.props";
import { useRouter } from "next/dist/client/router";

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [searchText, setSearchText] = useState<string>("");
  const router = useRouter();

  const goToSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        q: searchText,
      },
    });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      goToSearch();
    }
  };

  return (
    <div className={cn(className, styles.search)} {...props}>
      <Input
        className={styles.input}
        placeholder="Поиск..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button
        className={styles.button}
        appearence="primary"
        onClick={goToSearch}
      >
        <SearchIcon />
      </Button>
    </div>
  );
};
