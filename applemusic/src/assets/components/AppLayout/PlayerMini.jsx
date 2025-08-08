import { Button } from "react-bootstrap";
import logo from "./logos/apple.svg";

const PlayerMini = ({ track }) => {
    const hasTrack = track && track.title;

    return (
        <div className="d-flex align-items-center gap-2 justify-content-between w-100 flex-md-row">
            <div className="order-2 order-md-1 d-flex align-items-center gap-1 ms-2">
                <Button size="sm" variant="dark" aria-label="Prev">
                    <i className="bi bi-skip-backward-fill" />
                </Button>
                <Button size="sm" variant="dark" aria-label="Play">
                    <i className="bi bi-play-fill" />
                </Button>
                <Button size="sm" variant="dark" aria-label="Next">
                    <i className="bi bi-skip-forward-fill" />
                </Button>
            </div>

            <div className="order-1 order-md-2 d-flex align-items-center gap-2 flex-grow-0 flex-md-grow-1 justify-content-start justify-content-md-center">
                {hasTrack ? (
                    <>
                        {track?.album?.cover_small ? (
                            <img
                                src={track.album.cover_small}
                                alt=""
                                style={{
                                    width: 36,
                                    height: 36,
                                    objectFit: "cover",
                                    borderRadius: 6,
                                }}
                            />
                        ) : (
                            <div
                                style={{
                                    width: 36,
                                    height: 36,
                                    background: "#666",
                                    borderRadius: 6,
                                }}
                            />
                        )}
                        <div className="small text-truncate">
                            <div className="text-secondary fw-semibold text-truncate" style={{ maxWidth: 180 }}>
                                {track.title}
                            </div>
                            <div className="text-secondary text-truncate" style={{ maxWidth: 180 }}>
                                {track.artist?.name}
                            </div>
                        </div>
                    </>
                ) : (
                    <img
                        src={logo}
                        alt="Logo"
                        style={{
                            height: 42,
                            width: "auto",
                            filter: "invert(1)",
                        }}
                    />
                )}
            </div>
        </div>
    );
};

export default PlayerMini;
