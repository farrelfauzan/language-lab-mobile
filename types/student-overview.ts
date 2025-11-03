export enum ResultPerTypeEnum {
  WRITING = "writing",
  SPEAKING = "speaking",
  LISTENING = "listening",
  READING = "reading",
}

interface TypeResult {
  type: ResultPerTypeEnum;
  result: {
    averageScore: number;
    totalQuestions: number;
    totalAnsweredQuestions: number;
  };
}

interface StudentDetail {
  id: number;
  username: string;
  name: string;
  email: string;
  gender: string;
  picture: string;
  certificate: object | null;
}

export interface Leaderboard {
  student: {
    id: number;
    name: string;
    gender: string;
    picture: string;
    username: string | null;
  };
  overallScore: string;
  listeningScore: string;
  readingScore: string;
  writingScore: string;
  speakingScore: string;
  overallRank: number;
  listeningRank: number;
  readingRank: number;
  writingRank: number;
  speakingRank: number;
}

export interface StudentOverview {
  totalActivities: number;
  uncompletedActivities: number;
  averageScore: number;
  completitionRate: number;
  classRank: number;
  totalCertificates: number;
  totalClasses: number;
  totalQuestions: number;
  totalAnsweredQuestions: number;
  typeResults: TypeResult[];
  studentDetail: StudentDetail;
  leaderboard: Leaderboard[];
  leaderboardCreatedAt: Date | string | null;
}

export interface GetStudentOverview {
  studentId?: number;
  classId?: number;
}
