import React from 'react';

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}

export enum MethodologyStep {
  DISC = 'Análise DISC',
  BANT = 'Qualificação (BANT)',
  RULES = 'Regras de Ouro',
  CLOSING = 'Agendamento (Segurança)'
}

export interface SalesTip {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}