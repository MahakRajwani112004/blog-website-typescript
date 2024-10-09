
interface BlogPost {
    id: number;
    title: string;
    author: string;
    date: string;
    content: string;
    imgUrl: string;
}


export const existingBlogs: BlogPost[] = [
    {
        id: 1,
        title: "Exploring the Wonders of Nature",
        author: "John Doe",
        date: "2023-10-01",
        content: "Nature is a beautiful canvas painted with the colors of the earth. In this blog, we explore various aspects of nature...",
        imgUrl: "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
    },
    {
        id: 2,
        title: "The Art of Cooking",
        author: "Jane Smith",
        date: "2023-10-02",
        content: "Cooking is not just a necessity; it is an art form. Let's dive into some tips and recipes to enhance your culinary skills...",
        imgUrl:"https://images.squarespace-cdn.com/content/v1/651f3a38b2f69811ea35c9f1/1696545461736-BS7IN3O2T6QVPPQQE8S4/Cover.jpg"
    },
    {
        id: 3,
        title: "Traveling on a Budget",
        author: "Alice Johnson",
        date: "2023-10-03",
        content: "Traveling doesn't have to be expensive. Here are some tips on how to explore the world without breaking the bank...",
        imgUrl: "https://media.istockphoto.com/id/904172104/photo/weve-made-it-all-this-way-i-am-proud.jpg?s=612x612&w=0&k=20&c=MewnsAhbeGRcMBN9_ZKhThmqPK6c8nCT8XYk5ZM_hdg="
    },
    {
        id: 4,
        title: "The Future of Technology",
        author: "Bob Lee",
        date: "2023-10-04",
        content: "Technology is evolving at an unprecedented pace. In this article, we discuss the future trends that will shape our lives...",
               imgUrl: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Technology_Trends.jpg"
    },
    {
        id: 5,
        title: "Fitness Tips for a Healthier Life",
        author: "Maria Garcia",
        date: "2023-10-05",
        content: "Staying fit is crucial for a healthy lifestyle. Discover effective workouts and nutrition tips to achieve your fitness goals...",

        imgUrl: "https://domf5oio6qrcr.cloudfront.net/medialibrary/7174/2dcc3eb9-7eae-4230-b183-3fd8f2e8cca3.jpg",
    },
    {
        id: 6,
        title: "Understanding JavaScript Closures",
        author: "Chris Evans",
        date: "2023-10-06",
        content: "Closures are a fundamental concept in JavaScript that allow functions to retain access to their lexical scope. In this post, we'll explore how closures work...",
        imgUrl: "https://www.datocms-assets.com/48401/1628644950-javascript.png"
    },
];
