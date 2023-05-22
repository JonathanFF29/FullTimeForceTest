export interface Commit {
    sha: string;
    node_id: string;
    commit: {
      author: {
        name: string;
        email: string;
        date: string;
      };
      committer: {
        name: string;
        email: string;
        date: string;
      };
      message: string;
      tree: {
        sha: string;
        url: string;
      };
      url: string;
      comment_count: number;
      verification: {
        verified: boolean;
        reason: string;
        signature: string | null;
        payload: string | null;
      };
    };
    url: string;
    html_url: string;
    comments_url: string;
    author: any;
    committer: any;
    parents: {
      sha: string;
      url: string;
      html_url: string;
    }[];
  }