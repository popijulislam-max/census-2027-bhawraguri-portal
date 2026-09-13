CREATE TABLE IF NOT EXISTS hlb(id INTEGER PRIMARY KEY AUTOINCREMENT,phase INTEGER NOT NULL,hlb_no TEXT NOT NULL,village TEXT DEFAULT '',location TEXT DEFAULT '',status TEXT DEFAULT 'Pending',created_at TEXT DEFAULT CURRENT_TIMESTAMP,updated_at TEXT DEFAULT CURRENT_TIMESTAMP);
CREATE INDEX IF NOT EXISTS idx_hlb_phase_no ON hlb(phase,hlb_no);
CREATE TABLE IF NOT EXISTS gallery(id INTEGER PRIMARY KEY AUTOINCREMENT,title TEXT NOT NULL,file_key TEXT DEFAULT '',created_at TEXT DEFAULT CURRENT_TIMESTAMP);
CREATE TABLE IF NOT EXISTS notices(id INTEGER PRIMARY KEY AUTOINCREMENT,title TEXT NOT NULL,body TEXT DEFAULT '',created_at TEXT DEFAULT CURRENT_TIMESTAMP);
INSERT OR IGNORE INTO gallery(id,title) VALUES(1,'Office Building'),(2,'Training Session'),(3,'Field Activities'),(4,'Map Preparation'),(5,'Review Meeting'),(6,'Awareness Program');
INSERT OR IGNORE INTO notices(id,title,body) VALUES(1,'Portal Notice','Admin can manage notices and portal data.'),(2,'Phase I','House Listing & Housing Census modules are available.'),(3,'Phase II','Population Enumeration modules are available.');
