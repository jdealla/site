export default function SortIcon(props) {
    const { asc } = props;

    return (
        <span className="icon is-small">
             <i className={`fas fa-${asc ? "sort-up" : "sort-down"}`}></i>
        </span>
    )
}