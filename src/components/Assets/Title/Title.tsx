interface IProps {
    children: React.ReactNode;
    className: string;
}

export default function Title({ children, className }: IProps): JSX.Element {
    return <div className={className}>{children}</div>;
}
