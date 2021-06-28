import os

import boto3

from flask import Flask, jsonify, request
app = Flask(__name__)

USERS_TABLE = os.environ['USERS_TABLE']
client = boto3.client('dynamodb')


@app.route("/")
def hello():
    return "Hello World!"

# @app.route("/users")
# def usersroot():
#     return "users directory"

@app.route("/users/<string:userId>",methods = ['GET'])
def get_user(userId):
    if request.method == 'GET':
        resp = client.get_item(
            TableName=USERS_TABLE,
            Key={
                'userId': { 'S': userId }
            }
        )
        item = resp.get('Item')
        if not item:
            return jsonify({'error': 'User does not exist'}), 404

        return jsonify({
            'userId': item.get('userId').get('S'),
            'last_name': item.get('last_name').get('S'),
            'age': item.get('age',{'S' : ''}).get('S'),
            'DOB': item.get('DOB',{'S' : ''}).get('S')
            
        })
    else:
        return jsonify({'error': 'Please provide userId'}), 400

#profile creating Post

@app.route("/users", methods=["POST"])
def create_user():
    #Capture Data from Json URL
    userId = request.json.get('userId') 
    last_name = request.json.get('last_name')
    first_name = request.json.get('first_name')
    age = request.json.get('age','')
    DOB = request.json.get('DOB','')
    phone_num = request.json.get('phone_num','')
    gender = request.json.get('gender','')
    #City/Town
    locality = request.json.get('locality','')
    #State
    province = request.json.get('province','')
    postal_code = request.json.get('postal_code','')
    country = request.json.get('country','')
    #Description
    desc = request.json.get('desc','')
    #Photo
    photo_url = request.json.get('photo_url','')

    #Validate User URL

    if not userId:
        return jsonify({'error': 'Please provide userId'}), 400
    
    #check if userId Exists before Posts?????
    #
    #
    #
    #

    resp = client.put_item(
        TableName=USERS_TABLE,
        Item={
            'userId': {'S': userId },
            'last_name': {'S': last_name },
            'first_name': {'S': first_name },
            'age': {'S': age },
            'DOB': {'S': DOB },
            'phone_num': {'S': phone_num },
            'gender': {'S': gender },
            'locality': {'S': locality },
            'province': {'S': province },
            'postal_code': {'S': postal_code },
            'country': {'S': country },
            'desc': {'S': desc },
            'photo_url': {'S': photo_url }
        }
    )
    return jsonify({
        'userId': userId,
        'last_name': last_name,
        'first_name': first_name,
        'age' : age,
        'DOB': DOB,
        'phone_num' : phone_num,
        'gender' : gender,
        'locality' : locality,
        'province' : province,
        'postal_code' : postal_code,
        'country' : country,
        'desc' : desc,
        'photo_url' : photo_url
    })

#Delete user



#Instagram Creation Data

@app.route("/users/<string:userId>/instagram", methods=["PATCH"])
def update_instagram(userId):
    #Capture Data from Json URL
    userId = request.json.get('userId') 
    instagram_handle = request.json.get('instagram_handle')
    auth_code = request.json.get('auth_code','')
    short_token = request.json.get('short_token','')
    long_token = request.json.get('long_token','')
    #post_array = request.json.get('post_array','')

    #Validate User URL

    if not userId:
        return jsonify({'error': 'Please provide userId and last name'}), 400

    resp = client.update_item(
        TableName=USERS_TABLE,
        Key={
            'userId': { 'S': userId }
        },
        AttributeUpdates={
            'instagram_handle': {'Action': 'PUT','Value':{'S': instagram_handle }},
            'auth_code': {'Action': 'PUT','Value':{'S': auth_code }},
            'short_token': {'Action': 'PUT','Value':{'S': short_token}},
            'long_token': {'Action': 'PUT','Value':{'S': long_token }}
        },
    )
    return jsonify({
        'userId': userId,
        'instagram_handle': instagram_handle,
        'auth_code' : auth_code,
        'short_token': short_token,
        'long_token' : long_token
    })



#Facebook Creation Data

@app.route("/users/<string:userId>/facebook", methods=["PATCH"])
def update_facebook(userId):
    #Capture Data from Json URL
    userId = request.json.get('userId') 
    instagram_handle = request.json.get('instagram_handle')
    auth_code = request.json.get('auth_code','')
    short_token = request.json.get('short_token','')
    long_token = request.json.get('long_token','')
    #post_array = request.json.get('post_array','')

    #Validate User URL

    if not userId:
        return jsonify({'error': 'Please provide userId and last name'}), 400

    resp = client.update_item(
        TableName=USERS_TABLE,
        Key={
            'userId': { 'S': userId }
        },
        AttributeUpdates={
            'instagram_handle': {'Action': 'PUT','Value':{'S': instagram_handle }},
            'auth_code': {'Action': 'PUT','Value':{'S': auth_code }},
            'short_token': {'Action': 'PUT','Value':{'S': short_token}},
            'long_token': {'Action': 'PUT','Value':{'S': long_token }}
        },
    )
    return jsonify({
        'userId': userId,
        'instagram_handle': instagram_handle,
        'auth_code' : auth_code,
        'short_token': short_token,
        'long_token' : long_token
    })



#YouTube Creation Data

@app.route("/users/<string:userId>/youtube", methods=["PATCH"])
def update_youtube(userId):
    #Capture Data from Json URL
    userId = request.json.get('userId') 
    channel_name = request.json.get('channel_name')
    auth_code = request.json.get('auth_code','')
    short_token = request.json.get('short_token','')
    long_token = request.json.get('long_token','')
    #post_array = request.json.get('post_array','')

    #Validate User URL

    if not userId:
        return jsonify({'error': 'Please provide userId and last name'}), 400

    resp = client.update_item(
        TableName=USERS_TABLE,
        Key={
            'userId': { 'S': userId }
        },
        AttributeUpdates={
            'channel_name': {'Action': 'PUT','Value':{'S': channel_name }},
            'auth_code': {'Action': 'PUT','Value':{'S': auth_code }},
            'short_token': {'Action': 'PUT','Value':{'S': short_token}},
            'long_token': {'Action': 'PUT','Value':{'S': long_token }}
        },
    )
    return jsonify({
        'userId': userId,
        'channel_name': channel_name,
        'auth_code' : auth_code,
        'short_token': short_token,
        'long_token' : long_token
    })
