import React from 'react';
import { Link } from 'react-router-dom';

const DemoPage = () => {
    return (
        <div className="container">
            <div className="content">
                <div className="content-box">
                    <h1>Styles example (h1)</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting <Link to="/">main page</Link> industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to make a type
                        specimen <mark>book</mark>.
                    </p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur.</li>
                        <li>Lorem ipsum dolor.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing.
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur.</li>
                                <li>Lorem ipsum dolor.</li>
                            </ul>
                        </li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                    </ul>
                    <ol>
                        <li>Lorem ipsum dolor sit amet, consectetur.</li>
                        <li>Lorem ipsum dolor.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing.
                            <ol>
                                <li>Lorem ipsum dolor sit amet, consectetur.</li>
                                <li>Lorem ipsum dolor.</li>
                            </ol>
                        </li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                    </ol>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur deserunt distinctio
                        doloribus, eius, iusto labore modi nam necessitatibus quae quam, qui soluta tempore tenetur.
                        Fugit ipsum nisi perferendis sapiente sed. Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Alias, aspernatur assumenda blanditiis consectetur consequatur culpa cupiditate deserunt
                        doloribus earum eos illo impedit incidunt laboriosam libero necessitatibus nemo quam recusandae
                        saepe ullam voluptate? Adipisci, atque cum deserunt dolore ipsam ipsum iure modi nam nisi
                        numquam, pariatur quod recusandae soluta ut, vero?</p>
                </div>
                <div className="content-box">
                    <h2>Lorem ipsum dolor sit. (h2)</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus, adipisci alias, at
                        commodi cum cupiditate debitis dolor dolorum ea eius enim et eum incidunt inventore ipsa laborum
                        minus natus neque numquam placeat provident quasi ratione, sit veniam. Blanditiis, dolorum,
                        earum. Adipisci alias aperiam at, cumque delectus error eveniet ex impedit magnam, molestias
                        nesciunt nisi odit provident quia quibusdam reprehenderit sed voluptas voluptates? Cum dolor
                        dolores eos esse expedita ipsum iste iure magnam odio optio pariatur qui quibusdam quisquam,
                        reprehenderit veritatis voluptatem voluptates. Animi aspernatur, cupiditate earum exercitationem
                        facere ipsa laboriosam magni maxime molestias, odit repellendus tempora tempore temporibus
                        tenetur?</p>
                </div>
                <div className="content-box">
                    <h3>Lorem ipsum dolor sit amet, consectetur. (h3)</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cupiditate eos in inventore
                        iure iusto placeat tempora? Cumque earum fuga id nam nesciunt recusandae tempora tempore, ut!
                        Ipsam, quos saepe.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dignissimos enim, ex fugit maxime
                        neque praesentium quaerat quo similique tempore? Ab aliquam beatae delectus dolores et inventore
                        labore, maiores necessitatibus omnis provident, quia quod repellat repudiandae saepe soluta
                        totam veniam? Aliquam illo odio quasi quo sapiente? Ea neque placeat quo!</p>
                </div>
                <div className="content-box">
                    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing. (h4)</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ex exercitationem iusto
                        perferendis quia. Aspernatur beatae consectetur consequatur, cupiditate, dolore earum eos facere
                        hic id itaque nulla pariatur quibusdam quo repellendus sint vero voluptate. Earum enim natus
                        nemo perferendis quo repellat, soluta! Deleniti dignissimos dolore ea fugiat inventore
                        laboriosam numquam obcaecati quidem quis sed? Architecto commodi enim harum impedit magni
                        molestias obcaecati quia! Ad fugiat in pariatur, possimus sed soluta.</p>
                </div>
                <div className="content-box">
                    <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. (h5)</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eum, explicabo maxime nostrum
                        tenetur vero. Aliquam, enim ipsa! Asperiores aut commodi debitis, hic impedit in iusto magnam
                        magni necessitatibus pariatur perferendis placeat, quisquam quo rem saepe sed tenetur!
                        Accusantium aspernatur autem cum ea eius excepturi explicabo, fugit id nemo neque non obcaecati
                        quaerat, quisquam recusandae reiciendis repudiandae temporibus voluptate? Perferendis?</p>
                </div>
                <div className="content-box">
                    <h6>Lorem ipsum dolor sit amet, consectetur adipisicing. (h6)</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aliquid aut ratione
                        velit. Assumenda blanditiis deserunt illum itaque modi numquam vel veritatis. Aliquam, aperiam
                        aut eum id ipsam totam.</p>
                </div>
                <div className="content-box">
                    <blockquote>
                        <p>Цитата Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi at autem, commodi
                            cum deleniti ea earum enim, et facilis fugiat id, minus nobis odit quas quod similique ullam
                            voluptate.</p>
                    </blockquote>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam cupiditate dignissimos error
                        esse illo in iure minus molestias numquam officia omnis perspiciatis, placeat praesentium,
                        similique sint, ut velit voluptatem!</p>
                </div>
            </div>
        </div>
)
}

export default DemoPage;