export default interface StroriesDataType {
    id:         number;
    name:       string;
    photo:      string;
    stories:    StoryDataType[];
}

interface StoryDataType {
    id:     number;
    path:   string;
}