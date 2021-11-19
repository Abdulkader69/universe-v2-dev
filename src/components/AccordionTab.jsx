import Accordion from './Accordion';
const accordions = [
    {
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nisi esse excepturi eos enim culpa sit aperiam aspernatur? Ea cum quam iure voluptate eveniet dolorum voluptatum nobis labore tempore ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nisi esse excepturi eos enim culpa sit aperiam aspernatur? Ea cum quam iure voluptate eveniet dolorum voluptatum nobis labore tempore ad!',
    },
    {
        title: 'Commodi nisi esse excepturi eos enim',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nisi esse excepturi eos enim culpa sit aperiam aspernatur? Ea cum quam iure voluptate eveniet dolorum voluptatum nobis labore tempore ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nisi esse excepturi eos enim culpa sit aperiam aspernatur? Ea cum quam iure voluptate eveniet dolorum voluptatum nobis labore tempore ad!',
    },
    {
        title: 'dolorum voluptatum nobis labore tempore ad',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nisi esse excepturi eos enim culpa sit aperiam aspernatur? Ea cum quam iure voluptate eveniet dolorum voluptatum nobis labore tempore ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nisi esse excepturi eos enim culpa sit aperiam aspernatur? Ea cum quam iure voluptate eveniet dolorum voluptatum nobis labore tempore ad!',
    },
    {
        title: 'voluptate eveniet dolorum voluptatum nobis labore',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nisi esse excepturi eos enim culpa sit aperiam aspernatur? Ea cum quam iure voluptate eveniet dolorum voluptatum nobis labore tempore ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nisi esse excepturi eos enim culpa sit aperiam aspernatur? Ea cum quam iure voluptate eveniet dolorum voluptatum nobis labore tempore ad!',
    }
];

function AccordionTab() {
    return (
        <div className="accordion-section-wrap relative z-10 lg:mb-40 md:mb-32 mb-20 overflow-hidden">
        <div className="w-full max-w-container m-auto px-4">
            <h2 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:mb-20 lg:mb-16 mb-8 uppercase text-center text-white">FAQ'S</h2>
        </div>
        <div className="px-4 max-w-screen-lg  m-auto">
            {accordions.map((accordion) =>
                <Accordion key={accordion.title} title={accordion.title} content={accordion.content} />
            )}
        </div>
      </div>
    );
}

export default AccordionTab;
