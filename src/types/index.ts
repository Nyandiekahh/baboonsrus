// types/index.ts
export interface InfoPoint {
    id: number;
    position: {
      top: string;
      left: string;
    };
    title: string;
    content: string;
  }
  
  export interface ResearchHighlight {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    imageUrl: string;
    stats: {
      views: number;
      citations: number;
      shares: number;
    };
  }
  
  export interface DNADataPoint {
    name: string;
    shared: number;
    unique: number;
    details: string;
  }