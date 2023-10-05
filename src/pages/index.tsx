import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Zico Montibeller - Portfolio</title>
        <meta name="description" content="Zico Montibeller's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="sticky top-0 z-10 border-b bg-white pt-2">
        <h1 className="mb-2 px-4 text-lg font-bold">Portfolio</h1>
        <div>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div>
            <button>ThemeSelector</button>
          </div>
        </div>
      </header>
      
      <main className="page-body">
        <section id="about" className="zm-about-biography">
          <div>
            <div>
              <div id="profile">
                <img className="avatar avatar-circle" width="270" height="270" src="https://placehold.co/270x270" alt="Zico Montibeller"/>
                <div className="portrait-title">
                  <h2>Zico Montibeller</h2>
                  <h3>Front-End Engineer | Angular | ReactJS | Node.js</h3>
                </div>
                <ul className="network-icon" aria-hidden="true">
                  <li>
                    <a href="/#contact" aria-label="envelope">
                      <i className="fas fa-envelope big-icon"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/zicomontibeller" target="_blank" rel="noopener" aria-label="github">
                      <i className="fab fa-github big-icon"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/zicomontibeller/" target="_blank" rel="noopener" aria-label="linkedin">
                      <i className="fab fa-linkedin big-icon"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://drive.google.com/file/d/1fUayKZHsHR1UTMGdNpNuQdf0U2grRYaa/view?usp=drive_link" target="_blank" rel="noopener" aria-label="cv">
                      <i className="ai ai-cv big-icon"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h1>Biography</h1>

              <div className="article-style">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci nam dicta cupiditate fuga ducimus voluptate architecto praesentium aliquam iste, earum enim reiciendis quae rerum numquam sequi repellat! Ipsum, soluta eveniet!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus repellendus veniam, dolores voluptate dicta possimus commodi cupiditate. Repellendus, sapiente hic perspiciatis consequuntur consequatur sed quos voluptatum, ea voluptates ab voluptatibus.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nesciunt ipsum repudiandae delectus tempore? Et, assumenda. Deleniti porro, dolores vel, hic magnam doloribus id reiciendis ducimus a iusto magni minima.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, est. Reiciendis aliquid provident dolorum consequuntur tempora amet, ab quo dolores, doloremque accusamus eius incidunt maiores esse. Animi voluptate temporibus error!</p>
              </div>
              
              <div>
                <div>
                  <div>Interests</div>
                  <ul className="ul-interests fa-ul mb-0">
                    <li>
                      <i className="fa-li fa-solid fa-book"></i> Lorem Ipsum
                    </li>
                    <li>
                      <i className="fa-li fa-solid fa-book"></i> Lorem Ipsum
                    </li>
                    <li>
                      <i className="fa-li fa-solid fa-book"></i> Lorem Ipsum
                    </li>
                    <li>
                      <i className="fa-li fa-solid fa-book"></i> Lorem Ipsum
                    </li>
                    <li>
                      <i className="fa-li fa-solid fa-book"></i> Lorem Ipsum
                    </li>
                  </ul>
                </div>
                <div>
                  <div>Education</div>
                  <ul>
                    <li>
                      <i className="fa-li fa-solid fa-graduation-cap"></i>
                      <div className="description">
                        <p className="course">Lorem Ipsum</p>
                        <p className="institution">Lorem</p>
                      </div>
                    </li>
                    <li>
                      <i className="fa-li fa-solid fa-graduation-cap"></i>
                      <div className="description">
                        <p className="course">Lorem Ipsum</p>
                        <p className="institution">Lorem</p>
                      </div>
                    </li>
                    <li>
                      <i className="fa-li fa-solid fa-graduation-cap"></i>
                      <div className="description">
                        <p className="course">Lorem Ipsum</p>
                        <p className="institution">Lorem</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="zm-skills">
          <h1>Skills</h1>
          <div>
            <div>
              <div className="featurette-icon">
                <i className="fas fa-globe"></i>
              </div>
              <div>Geospatial</div>
              <p>90%</p>
            </div>
            <div>
              <div className="featurette-icon">
                <i className="fab fa-microsoft"></i>
              </div>
              <div>Microsoft Office</div>
              <p>95%</p>
            </div>
            <div>
              <div className="featurette-icon">
                <i className="fab fa-python"></i>
              </div>
              <div>Python</div>
              <p>75%</p>
            </div>
            <div>
              <div className="featurette-icon">
                <i className="fas fa-book"></i>
              </div>
              <div>Curiosity</div>
              <p>100%</p>
            </div>
            <div>
              <div className="featurette-icon">
                <i className="fas fa-biking"></i>
              </div>
              <div>Biking</div>
              <p>40%</p>
            </div>
            <div>
              <div className="featurette-icon">
                <i className="fas fa-robot"></i>
              </div>
              <div>Robotics</div>
              <p>10%</p>
            </div>
          </div>
        </section>

        <section id="experience" className="zm-experience">
          <h1>Experience</h1>
          <div>
            <div>
              <div>
                <div>Lorem Ipsum</div>
                <div>Lorem Ipsum</div>
                <div>October 2012 – Present <span className="middot-divider"></span>
                  <span>Home Office</span>
                </div>
                <div className="card-text">
                  <p>Responsibilities include:</p>
                  <ul>
                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                    <li>Doloremque laboriosam qui temporibus modi quam dignissimos sunt. Officiis, aut!</li>
                    <li>At assumenda nemo nam ut ullam numquam quo placeat ab qui amet.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="projects" className="zm-projects">
          <h1>Projects</h1>
          <div>
            <div>
              <a href="#">
                <img src="https://placehold.co/264x540" height="264" width="540" alt="Lorem Ipsum" loading="lazy"/>
              </a>
              <div>
                <h3>Lorem</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, blanditiis totam? Asperiores incidunt soluta sunt est dolorum! Ducimus eos, sint ipsa illum aut nam suscipit odio, molestias voluptate assumenda nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. A nulla sapiente nihil numquam nobis blanditiis quis veritatis, neque delectus culpa maiores. Minima amet possimus eos quos nam! Quidem, velit libero.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="zm-contact">
          <div>
            <h1>Contact</h1>
            <p>If you want to get in touch, send an email or use one of the resources indicated in this page.</p>
          </div>
          <div>
            <ul className="fa-ul">
              <li>
                <i className="fa-li fas fa-envelope fa-2x" aria-hidden="true"></i>
                <span id="person-email">
                  <a href="mailto:zico.montibeller@gmail.com">zico.montibeller@gmail.com</a>
                </span>
              </li>
              <li>
                <i className="fa-li fas fa-phone fa-2x" aria-hidden="true"></i>
                <span id="person-telephone">
                  <a href="tel:47996142144">47 996 142 144</a>
                </span>
              </li>
              <li>
                <i className="fa-li fas fa-map-marker fa-2x" aria-hidden="true"></i>
                <span id="person-address">Jaraguá do Sul, SC</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2023 Zico Montibeller. This work is licensed under <a href="https://creativecommons.org/licenses/by-nc-nd/4.0" rel="noopener noreferrer" target="_blank">CC BY NC ND 4.0</a>. Feel free to copy or adapt according to your interest </p>
        <p>
          <a href="https://creativecommons.org/licenses/by-nc-nd/4.0" rel="noopener noreferrer" target="_blank" aria-label="Creative Commons">
            <i className="fab fa-creative-commons fa-2x" aria-hidden="true"></i>
            <i className="fab fa-creative-commons-by fa-2x" aria-hidden="true"></i>
            <i className="fab fa-creative-commons-nc fa-2x" aria-hidden="true"></i>
            <i className="fab fa-creative-commons-nd fa-2x" aria-hidden="true"></i>
          </a>
        </p>
      </footer>
    </>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}