import teamMembers from "./TeamData";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const OpenTeamPage = (member) => {
  navigate('/teampage', { state: { member } });

    }

    return (
        <div className='body'>
            <div className="preloader">
                <div className="preloader-middle">
                    <div className="left-preloader" />
                    <div className="middle-preloader">
                        <div className="stripe-preloader left" />
                        <div className="stripe-preloader middle" />
                        <div className="stripe-preloader right" />
                    </div>
                    <div className="right-preloader" />
                </div>
            </div>
            <div
                data-collapse="none"
                data-animation="default"
                data-duration={400}
                data-easing="ease"
                data-easing2="ease"
                role="banner"
                className="navbar w-nav"
            >
                <div className="wrapper navbar-wrapper">
                    <div className="left-navbar">
                        <a
                            href="/"
                            aria-current="page"
                            className="brand w-nav-brand w--current"
                        >
                            <img
                                src="images/SAANVI-STRUCTURAL-SOLN-3-1.png"
                                loading="lazy"
                                width={135}
                                alt="saanvi"
                                className="image1"
                            />
                        </a>
                        <div
                            data-w-id="17c43587-c790-b4d8-1466-5f40336b9d4c"
                            className="full-menu-button"
                        >
                            <div
                                data-is-ix2-target={1}
                                className="menu-lottie"
                                data-w-id="17c43587-c790-b4d8-1466-5f40336b9d4d"
                                data-animation-type="lottie"
                                data-src="documents/menu-nav.json"
                                data-loop={0}
                                data-direction={1}
                                data-autoplay={0}
                                data-renderer="svg"
                                data-default-duration="2.875"
                                data-duration={0}
                                data-ix2-initial-state={0}
                            />
                        </div>
                    </div>
                    <div className="menu-wrapper">
                        <nav role="navigation" className="nav-menu w-nav-menu">
                            <div className="navigation-links">
                                <a
                                    href="/services"
                                    className="nav-link w-inline-block"
                                >
                                    <div className="button-text">Services</div>
                                    <div className="nav-link-hover-button" />
                                </a>
                                <a href="/projects" className="nav-link w-inline-block">
                                    <div className="button-text">Projects</div>
                                    <div className="nav-link-hover-button" />
                                </a>
                                <a href="/contact" className="nav-link bottom w-inline-block">
                                    <div className="button-text">Contact </div>
                                    <div className="nav-link-hover-button" />
                                </a>
                            </div>
                        </nav>
                        <div className="menu-button w-nav-button">
                            <div className="w-icon-nav-menu" />
                        </div>
                        <div className="navigation-cover" />
                    </div>
                    <div className="mega-menu">
                        <div className="large-menu-wrapper">
                            <div
                                id="w-node-_16738520-6de8-1fcc-6cbc-d48e45d42b91-336b9d43"
                                className="mega-category-list"                            >
                                <div className="stacked-description horizontal">
                                    <div
                                        id="w-node-_16738520-6de8-1fcc-6cbc-d48e45d42b93-336b9d43"
                                        className="subtitle"
                                    >
                                        Our team
                                    </div>
                                    <a href="/team" className="button-14 w-button">
                                        View all
                                    </a>
                                </div>
                                {teamMembers.slice(0, 2).map((member) => (
                                    <div className="div-block-30" key={member.id}>
                                        <img
                                            src={member.image}
                                            loading="lazy"
                                            width={45}
                                            alt={member.name}
                                            className="image"
                                        />
                                        <a
                                            onClick={() => OpenTeamPage(member)}
                                            className="post-list-item category-list-item w-inline-block"
                                            style={{ cursor: 'pointer' }}
                                        >
                                            {member.name}
                                        </a>
                                    </div>
                                ))}
                                {/* <div className="div-block-30">
                                    <div>
                                        <img src="images/maf.avif"
                                            loading="lazy"
                                            width={45}
                                            alt="saanvi"
                                            className="image"></img>
                                    </div>
                                    <div>
                                        <a onClick={(e)=>{OpenTeamPage("1")}} className="post-list-item category-list-item w-inline-block">
                                            Madhan Kumar K, MS, P.E.
                                        </a>
                                    </div>
                                </div>
                                <div className="div-block-30">
                                    <div>
                                        <img src="images/sri.avif"
                                            loading="lazy"
                                            width={45}
                                            alt="saanvi"
                                            className="image"></img>
                                    </div>
                                    <div>
                                        <a onClick={(e)=>{OpenTeamPage("2")}} className="post-list-item category-list-item w-inline-block">
                                            Sridhar Kethu P.E.
                                        </a>
                                    </div>
                                </div> */}
                                {/* <div className="div-block-30">
                                    <div>
                                        <img src="images/sri.avif"
                                            loading="lazy"
                                            width={45}
                                            alt="saanvi"
                                            className="image"></img>
                                    </div>
                                    <div>
                                        <a href="#" className="post-list-item category-list-item w-inline-block">
                                            Sridhar Kethu P.E.
                                        </a>
                                    </div>
                                </div> */}
                            </div>
                            <div
                                id="w-node-_17c43587-c790-b4d8-1466-5f40336b9d61-336b9d43"
                                className="mega-category-list middle"
                            >
                                <div className="stacked-description horizontal">
                                    <div
                                        id="w-node-_17c43587-c790-b4d8-1466-5f40336b9d63-336b9d43"
                                        className="subtitle"
                                    >
                                        Services
                                    </div>
                                    <a href="/services" className="button-14 w-button">
                                        View all
                                    </a>
                                </div>
                                <div className="div-block-30">

                                    <div>
                                        <a href="#" className="post-list-item category-list-item w-inline-block">
                                            SOLAR
                                        </a>
                                    </div>
                                </div>
                                <div className="div-block-30">

                                    <div>
                                        <a href="#" className="post-list-item category-list-item w-inline-block">
                                            BUILDINGS                                        </a>
                                    </div>
                                </div>
                                <div className="div-block-30">

                                    <div>
                                        <a href="#" className="post-list-item category-list-item w-inline-block">
                                            TELLECOMMUNICATIONS                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                id="w-node-e16c4357-004d-8209-e100-36bb04545bd4-336b9d43"
                                className="mega-category-list"                            >
                                <div className="stacked-description horizontal">
                                    <div
                                        id="w-node-e16c4357-004d-8209-e100-36bb04545bd6-336b9d43"
                                        className="subtitle"
                                    >
                                        Blogs
                                    </div>
                                    <a
                                        href="/"
                                        aria-current="page"
                                        className="button-14 w-button w--current"
                                    >
                                        View all
                                    </a>
                                </div>
                                <div>
                                    <div className="w-dyn-list">
                                        <div role="list" className="mega-menu-list-wrapper w-dyn-items">
                                            <div
                                                role="listitem"
                                                className="menu-collection-list-item w-dyn-item"
                                            >
                                                <a
                                                    href="#"
                                                    className="post-list-item category-list-item w-inline-block"
                                                >
                                                    <div className="stacked-description">
                                                        <div className="list-item-text w-dyn-bind-empty" />
                                                    </div>
                                                    <img
                                                        src="images/arrow-right48x482x.svg"
                                                        loading="lazy"
                                                        id="w-node-_4541705a-de97-7f82-8818-9c9145464680-4546467a"
                                                        alt="arrow"
                                                        className="list-item-arrow"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="w-dyn-empty">
                                            <div>No items found.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                id="w-node-d364a0a1-eed2-cc02-8c38-c72be241387a-336b9d43"
                                className="tablet-mobile-menu"
                            >
                                <div
                                    data-hover="false"
                                    data-delay={1300}
                                    id="w-node-_742bc615-eb92-0d24-5678-32641c325156-336b9d43"
                                    className="dropdown top w-dropdown"
                                >
                                    <div className="dropdown-toggle w-dropdown-toggle">
                                        <div className="body-display dark">Our team</div>
                                        <div
                                            data-is-ix2-target={1}
                                            className="dropdown-lottie"
                                            data-w-id="310e10b1-84f0-48f0-3347-482d442c2ed8"
                                            data-animation-type="lottie"
                                            data-src="documents/dropdown-easey.json"
                                            data-loop={0}
                                            data-direction={1}
                                            data-autoplay={0}
                                            data-renderer="svg"
                                            data-default-duration={2}
                                            data-duration={0}
                                            data-ix2-initial-state={50}
                                        />
                                    </div>
                                    <nav className="dropdown-list w-dropdown-list">
                                        <div className="div-block-30">
                                            <div>
                                                <img src="images/maf.avif"
                                                    loading="lazy"
                                                    width={45}
                                                    alt="saanvi"
                                                    className="image"></img>
                                            </div>
                                            <div>
                                                <a href="#" className="post-list-item category-list-item w-inline-block">
                                                    Madhan Kumar K, MS, P.E.
                                                </a>
                                            </div>
                                        </div>
                                        <div className="div-block-30">
                                            <div>
                                                <img src="images/sri.avif"
                                                    loading="lazy"
                                                    width={45}
                                                    alt="saanvi"
                                                    className="image"></img>
                                            </div>
                                            <div>
                                                <a href="#" className="post-list-item category-list-item w-inline-block">
                                                    Sridhar Kethu P.E.
                                                </a>
                                            </div>
                                        </div>
                                        <a
                                            href="/team"
                                            className="post-list-item category-list-item w-inline-block"
                                        >
                                            <div>About us</div>
                                            <img
                                                src="images/arrow-right48x482x.svg"
                                                loading="lazy"
                                                id="w-node-f6a0a796-4f1d-5758-490b-395b2a23adce-336b9d43"
                                                alt="arrow"
                                                className="list-item-arrow"
                                            />
                                        </a>
                                    </nav>
                                </div>
                                <div
                                    data-hover="false"
                                    data-delay={1300}
                                    className="dropdown w-dropdown"
                                >
                                    <div className="dropdown-toggle w-dropdown-toggle">
                                        <div className="body-display dark">Services</div>
                                        <div
                                            data-is-ix2-target={1}
                                            className="dropdown-lottie"
                                            data-w-id="26ed9205-d756-8b1d-71b5-e2d2bc505b69"
                                            data-animation-type="lottie"
                                            data-src="documents/dropdown-easey.json"
                                            data-loop={0}
                                            data-direction={1}
                                            data-autoplay={0}
                                            data-renderer="svg"
                                            data-default-duration={2}
                                            data-duration={0}
                                            data-ix2-initial-state={50}
                                        />
                                    </div>
                                    <nav className="dropdown-list w-dropdown-list">
                                        <div className="div-block-30">

                                            <div>
                                                <a href="#" className="post-list-item category-list-item w-inline-block">
                                                    SOLAR
                                                </a>
                                            </div>
                                        </div>
                                        <div className="div-block-30">

                                            <div>
                                                <a href="#" className="post-list-item category-list-item w-inline-block">
                                                    BUILDINGS                                        </a>
                                            </div>
                                        </div>
                                        <div className="div-block-30">

                                            <div>
                                                <a href="#" className="post-list-item category-list-item w-inline-block">
                                                    TELLECOMMUNICATIONS                                        </a>
                                            </div>
                                        </div>
                                        <a
                                            href="/projects"
                                            className="post-list-item category-list-item w-inline-block"
                                        >
                                            <div>View all</div>
                                            <img
                                                src="images/arrow-right48x482x.svg"
                                                loading="lazy"
                                                id="w-node-_169c8dac-dcf9-9d77-b5a0-6fe2bb220d51-336b9d43"
                                                alt="arrow"
                                                className="list-item-arrow"
                                            />
                                        </a>
                                    </nav>
                                </div>
                                <div
                                    data-hover="false"
                                    data-delay={1300}
                                    id="w-node-fdd5de7a-6baa-18bc-4fc4-17f9de14bff9-336b9d43"
                                    className="dropdown w-dropdown"
                                >
                                    <div className="dropdown-toggle w-dropdown-toggle">
                                        <div className="body-display dark">Blogs</div>
                                        <div
                                            data-is-ix2-target={1}
                                            className="dropdown-lottie"
                                            data-w-id="7c88412b-5653-be4c-c04b-15b269f63e7d"
                                            data-animation-type="lottie"
                                            data-src="documents/dropdown-easey.json"
                                            data-loop={0}
                                            data-direction={1}
                                            data-autoplay={0}
                                            data-renderer="svg"
                                            data-default-duration={2}
                                            data-duration={0}
                                            data-ix2-initial-state={50}
                                        />
                                    </div>
                                    <nav className="dropdown-list w-dropdown-list">
                                        <div className="w-dyn-list">

                                            <div className="w-dyn-empty">
                                                <div>No items found.</div>
                                            </div>
                                        </div>
                                        {/* <a
                                            href="#"
                                            className="post-list-item category-list-item w-inline-block"
                                        >
                                            <div>View all</div>
                                            <img
                                                src="images/arrow-right48x482x.svg"
                                                loading="lazy"
                                                id="w-node-fbb98bb2-0970-908c-f9a3-aa45d34eaea4-336b9d43"
                                                alt="arrow"
                                                className="list-item-arrow"
                                            />
                                        </a> */}
                                    </nav>
                                </div>
                            </div>
                            <div
                                id="w-node-be6e1212-c8c8-b564-9d2f-b92422ca9045-336b9d43"
                                className="tablet-mobile-nav-links"
                            >
                                <div className="navigation-links">
                                    <a href="/services" className="nav-link w-inline-block" >
                                        <div className="button-text">Services</div>
                                        <div className="nav-link-hover-button" />
                                    </a>
                                    <link rel="prefetch" href="/Projects" />
                                    <a href="/projects" className="nav-link w-inline-block">
                                        <div className="button-text">Projects</div>
                                        <div className="nav-link-hover-button" />
                                    </a>
                                    <a href="/contact" className="nav-link bottom w-inline-block">
                                        <div className="button-text">Contact </div>
                                        <div className="nav-link-hover-button" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mega-menu-overlay" />
                </div>
            </div>
        </div >
    )
}

export default Header
