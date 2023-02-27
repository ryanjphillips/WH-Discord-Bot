// TALBE PATH AND NAMES
export const SPOTIFYKEYSTABLEPATH = '/home/ys/Code/wrong-house-bot/src/sqlite/tables/spotifyKeys.db';

// STRING SQL
export const deleteAllTables = 'DROP TABLE IF EXISTS spotifyKeys';
export const createSpotifyKeysTable = `CREATE TABLE IF NOT EXISTS spotifyKeys (
                                         keySet_id INTEGER PRIMARY KEY AUTOINCREMENT, 
                                         clientSecret TEXT, 
                                         clientId TEXT, 
                                         redirectUri TEXT, 
                                         stateKey TEXT, 
                                         scope TEXT,
                                         code TEXT, 
                                         accessToken TEXT, 
                                         refreshToken TEXT, 
                                         tokenCeationTime TEXT
                                      )`;
export const insertSpotifyKeys = `INSERT INTO spotifyKeys (clientSecret, clientId, redirectUri, stateKey, scope, code, accessToken, refreshToken, tokenCeationTime)
                                  VALUES (?,?,?,?,?,?,?,?,?)`;

export const updateSpotifyKeys = `UPDATE spotifyKeys 
                                  SET accessToken = ?,
                                      refreshToken = ?,
                                      tokenCeationTime = ?
                                  Where
                                      keySet_id = 2`;
export const checkSpotifyKeys = 'SELECT * FROM spotifyKeys';

export const updateSpotifyAccessKey = `UPDATE spotifyKeys 
                                       SET accessToken = ?,
                                           tokenCeationTime = ?
                                       Where
                                           keySet_id = 2`;
export const getSpotifyRefreshKey = `SELECT refreshToken from spotifyKeys
                                     Where
                                        keySet_id = 2`;

export const getSpotifyAccessKeyTime = `SELECT tokenCeationTime from spotifyKeys
                                        Where
                                          keySet_id = 2`;
export const getSpotifyAccessKey = `SELECT accessToken from spotifyKeys
                                    Where
                                        keySet_id = 2`;

export const getSpotifyKeys = `SELECT * from spotifyKeys
                              Where
                                  keySet_id = 2`;
export const updateSpotifyCode = `UPDATE spotifyKeys
                                    SET code = ?
                                    Where keySet_id = 2`;
