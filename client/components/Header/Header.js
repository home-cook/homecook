import { Button, Heading } from "evergreen-ui";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <nav>
        <ul>
          <li className="left">
            {" "}
            <Link href="/">
              <a>
                <Heading size={900}>Homecook</Heading>
              </a>
            </Link>
          </li>
          <div className="right">
            <li className="one-li">
              <Button appearance="primary">Sign-in</Button>
            </li>
            <li>
              <Button appearance="primary">Sign-up</Button>
            </li>
          </div>
        </ul>
      </nav>
      <style jsx>{`
        nav {
          background-color: #3DDC97;
          padding: 1rem 5rem;
 

        }
        nav ul {
            list-style-type: none;
            display: flex;
            justify-content: space-between;
        }
        nav ul li {
            cursor: pointer:
        }

        .right {
          display: flex;  
     
        }
        .one-li {
            padding-right: 3rem;
        }
      `}</style>
    </>
  );
};

export default Header;
