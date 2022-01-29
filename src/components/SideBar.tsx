import { GenreResponseProps } from "../models/Genre";
import { Button } from "./Button";

interface ISideBarProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  handleClickButton: (id: number) => void;
  children?: React.ReactNode;
}

export function SideBar(props: ISideBarProps) {
  const { genres, selectedGenreId } = props;

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
