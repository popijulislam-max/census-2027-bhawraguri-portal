-- Additive-only migration. It does not delete or replace existing Census 2027 data.
CREATE INDEX IF NOT EXISTS idx_hlbs_phase_no ON hlbs(phase,no);
CREATE INDEX IF NOT EXISTS idx_reports_phase_date ON reports(phase,date);
CREATE INDEX IF NOT EXISTS idx_maps_phase_date ON maps(phase,date);
CREATE INDEX IF NOT EXISTS idx_enumerators_phase ON enumerators(phase);
CREATE INDEX IF NOT EXISTS idx_supervisors_phase ON supervisors(phase);
CREATE INDEX IF NOT EXISTS idx_officers_phase ON officers(phase);
CREATE INDEX IF NOT EXISTS idx_support_phase ON technical_support(phase);
CREATE INDEX IF NOT EXISTS idx_indicators_hlb ON indicators(hlb);
