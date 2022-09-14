import Header from '~/Layout/Header';
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">{children}</div>
        </div>
    );
}

export default DefaultLayout;
