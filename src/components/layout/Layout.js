import MainNavigation from './MainNavigation';

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      {/* <div>Hello</div> */}
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;