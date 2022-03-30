import requests

class MyError(Exception):
    def __init___(self,args):
        Exception.__init__(self,"my exception was raised with arguments {0}".format(args))
        self.args = args

baseURL = 'https://aviationweather.gov/adds/dataserver_current/httpparam?dataSource=' # constant pat of resource URL
resource = 'metars&requestType=retrieve&format=xml&hoursBeforeNow=3&mostRecent=true&stationString=CYOO' # variable part of URL based on 

# use requests package to drive the RESTful session with space-track.org
with requests.Session() as session:
    # run the session in a with block to force session to close if we exit
    resp = session.get(baseURL+resource)
    print(resp.text)
    if resp.status_code != 200:
        print(resp)
        raise MyError(resp, "GET fail on request")

    session.close()
print("Completed session") 