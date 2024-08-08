type DailyReport = {
  date: string;
  start_time: string;
  end_time: string;
  total_generated: number;
  total_tips: number;
  cash_on_hand_start: number;
  cash_on_hand_end: number;
  fuel_expenses: number;
};

type MonthlyStatistics = {
  total_generated: number;
  total_tips: number;
  total_fuel_expenses: number;
  average_earnings_per_hour: number;
};

type Settings = {
  notifications: {
    email: boolean;
    sms: boolean;
  };
  language: string;
  theme: string;
};

class User {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  profile_picture: string;
  role: string;
  created_at: Date;
  updated_at: Date;
  daily_reports: DailyReport[];
  monthly_statistics: Record<string, MonthlyStatistics>;
  settings: Settings;

  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    phone: string,
    profile_picture: string,
    role: string,
    created_at: Date,
    updated_at: Date,
    daily_reports: DailyReport[] = [],
    monthly_statistics: Record<string, MonthlyStatistics> = {},
    settings: Settings = {
      notifications: {
        email: true,
        sms: false,
      },
      language: "es",
      theme: "light",
    }
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.profile_picture = profile_picture;
    this.role = role;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.daily_reports = daily_reports;
    this.monthly_statistics = monthly_statistics;
    this.settings = settings;
  }

  // Métodos nativos
  addDailyReport(report: DailyReport) {
    this.daily_reports.push(report);
    this.updated_at = new Date();
  }

  updateMonthlyStatistics(month: string, stats: MonthlyStatistics) {
    this.monthly_statistics[month] = stats;
    this.updated_at = new Date();
  }

  updateSettings(newSettings: Settings) {
    this.settings = newSettings;
    this.updated_at = new Date();
  }

  getMonthlySummary(month: string): MonthlyStatistics | undefined {
    return this.monthly_statistics[month];
  }

  getTotalGenerated(): number {
    return this.daily_reports.reduce(
      (total, report) => total + report.total_generated,
      0
    );
  }

  getTotalTips(): number {
    return this.daily_reports.reduce(
      (total, report) => total + report.total_tips,
      0
    );
  }

  getTotalFuelExpenses(): number {
    return this.daily_reports.reduce(
      (total, report) => total + report.fuel_expenses,
      0
    );
  }

  getAverageEarningsPerHour(): number {
    const totalHours = this.daily_reports.reduce((total, report) => {
      const startTime = new Date(`1970-01-01T${report.start_time}:00`);
      const endTime = new Date(`1970-01-01T${report.end_time}:00`);
      const hours =
        (endTime.getTime() - startTime.getTime()) / (1000 * 60 * 60);
      return total + hours;
    }, 0);

    const totalGenerated = this.getTotalGenerated();
    return totalHours > 0 ? totalGenerated / totalHours : 0;
  }

  // Método para obtener un resumen completo del usuario
  getUserSummary() {
    return {
      total_generated: this.getTotalGenerated(),
      total_tips: this.getTotalTips(),
      total_fuel_expenses: this.getTotalFuelExpenses(),
      average_earnings_per_hour: this.getAverageEarningsPerHour(),
    };
  }
}

export type { DailyReport, MonthlyStatistics, Settings };
export { User };
