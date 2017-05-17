require 'test_helper'

class SerieControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get serie_index_url
    assert_response :success
  end

  test "should get show" do
    get serie_show_url
    assert_response :success
  end

  test "should get new" do
    get serie_new_url
    assert_response :success
  end

  test "should get edit" do
    get serie_edit_url
    assert_response :success
  end

end
