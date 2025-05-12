export default function AtlysInTheNews() {
  const newsItems = [
    {
      name: "FORTUNE",
      type: "url",
      content: "https://static.cdnlogo.com/logos/f/56/fortune.svg",
      text: "Atlys Streamlines Visa Process as Borders Reopen",
      url: "#"
    },
    {
      name: "Forbes",
      type: "url",
      content: "https://i0.wp.com/www.printmag.com/wp-content/uploads/2017/09/2a34d8_e962671bff2c494d90d3da7f4f416f7dmv2.jpg?resize=1000,281&quality=89&ssl=1",
      text: "How Governments Can Streamline Visas",
      url: "#"
    },
    {
      name: "FastCompany",
      type: "url",
      content: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/FC_logo_transparent.png/250px-FC_logo_transparent.png",
      text: "The 10 most innovative travel companies of 2022",
      url: "#"
    },
    {
      name: "The Washington Post",
      type: "url",
      content: "https://static.cdnlogo.com/logos/t/79/the-washington-post.png",
      text: "Gamechangers: atlys as Winner in Technology sector",
      url: "#"
    },
    {
      name: "TechCrunch",
      type: "url",
      content: "https://cdn.prod.website-files.com/5ee732bebd9839b494ff27cd/5ef09d9069925cc4f5c0b778_techcrunch-logo.png",
      text: "Atlys raises $4.25M to make visas faster and easier",
      url: "#"
    }
  ];

  return (
    <div className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Atlys In The News
        </h2>
        <div class="h-px w-full bg-gray-300 mt-4 mb-16"></div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-10 items-start">
          {newsItems.map((item) => (
            <a href={item.url} key={item.name} className="text-center group flex flex-col items-center space-y-3">
              <div className="h-16 w-full flex items-end justify-center px-2 svg-logo-container">
                {item.type === 'svg' ? (
                  <div
                    className="w-full h-full text-gray-600 group-hover:text-indigo-700 transition-colors duration-300 flex items-center justify-center"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                ) : (
                  <img
                    src={item.content}
                    alt={`${item.name} logo`}
                    className="max-h-full max-w-full object-contain group-hover:opacity-85 transition-opacity duration-300"
                  />
                )}
              </div>
              <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300 leading-tight px-1">
                {item.text}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
} 