export function SortIcon(props) {
    const { direction } = props;

    return (
        <span className="icon is-small">
             <i className={`fas fa-${direction === "up" ? "sort-up" : "sort-down"}`}></i>
        </span>
    )
}